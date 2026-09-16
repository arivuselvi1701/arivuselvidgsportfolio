import re
import glob

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We will just find the span and move it above the button, then replace `<li key={section.id}>` with `<li key={section.id} className="relative flex items-center">`
    # Also change -left-[4.5px] to -left-[28.5px] and add top-1/2 -translate-y-1/2
    
    # Extract the span
    span_pattern = r'(\s*)<span className={`absolute -left-\[4\.5px\] w-\[9px\] h-\[9px\] rounded-full transition-all duration-300 \$\{([^}]+)\}`}></span>\n'
    
    match = re.search(span_pattern, content)
    if not match:
        print(f"No match in {filepath}")
        return
        
    indent = match.group(1)
    condition = match.group(2)
    
    # Remove the span from its original place
    content = content.replace(match.group(0), "")
    
    # Build the new span
    new_span = f'{indent}<span className={{`absolute -left-[28.5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ${{ {condition} }}`}}></span>\n'
    
    # Replace li
    content = content.replace('<li key={section.id}>', f'<li key={{section.id}} className="relative flex items-center">\n{new_span}')
    
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Fixed {filepath}")

for f in glob.glob('src/pages/*CaseStudy.jsx'):
    fix_file(f)
