from jinja2 import Environment, FileSystemLoader
from pathlib import Path

env = Environment(
    loader = FileSystemLoader(''), autoescape = 'html',
    trim_blocks = True, lstrip_blocks = True
)

for path in Path('.').glob('**/*.html.jinja'):
    if 'templates' in path.parts: continue
    template = env.get_template(path.as_posix())
    with open(
        f'{path.parent}/{path.stem}',
        'w', encoding = 'utf-8'
    ) as file:
        print(template.render(), file = file)
