import re
import glob

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We want to change the li and button structure.
    # Current:
    #                 <li key={section.id}>
    #                   <button 
    #                     onClick={() => scrollToSection(section.id)}
    #                     className={`...`}
    #                   >
    #                     <span className={`absolute -left-[4.5px] ...`}></span>
    #                     <span className={`mr-4 ...`}>...</span>
    
    # Target:
    #                 <li key={section.id} className="relative">
    #                   <span className={`absolute -left-[28.5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ${activeSection === section.id ? ...}`}></span>
    #                   <button ...>
    #                     <span className={`mr-4 ...`}>...</span>

    pattern = r'(<li key={section\.id}>)\s*<button([^>]+)>\s*<span className={`absolute -left-\[4\.5px\] w-\[9px\] h-\[9px\] rounded-full transition-all duration-300 \$\{([^}]+)\}`}></span([^>]*)>'
    
    def repl(m):
        li_start = '<li key={section.id} className="relative flex items-center">'
        button_tag = '<button' + m.group(2) + '>'
        condition = m.group(3)
        span_tag = f'<span className={{`absolute -left-[28.5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ${{ {condition} }}`}}></span>'
        return f'{li_start}\n                  {span_tag}\n                  {button_tag}'
        
    new_content = re.sub(pattern, repl, content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")
    else:
        print(f"No match found in {filepath}")

for f in glob.glob('src/pages/*CaseStudy.jsx'):
    fix_file(f)
