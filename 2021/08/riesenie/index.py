preprocess = {'y': 'i', 'ý': 'í'}

digraphs = ['ch', 'dz', 'dž', 'ia', 'ie', 'iu']

sequences = [
    ['a', 'e', 'i', 'o', 'u'],
    ['á', 'é', 'í', 'ó', 'ú'],
    ['ia', 'ie', 'iu', 'ô'],
    [
        'b', 'c', 'č', 'd', 'ď', 'dz', 'dž', 'f', 'g', 'h', 'ch', 'j', 'k',
        'l', 'ľ', 'm', 'n', 'ň', 'p', 'r', 's', 'š', 't', 'ť', 'v', 'z', 'ž'
    ]
]

table = {}
for sequence in sequences:
    mod = len(sequence)
    for index, item in enumerate(sequence):
        table[item] = sequence[(index + 3) % mod]
        table[item.upper()] = sequence[(index + 3) % mod].upper()

text = ''
with open('original.txt', encoding = 'utf-8') as file:
    text = file.read()

translation = text + '\n--\n\n'

for digraph in digraphs:
    text = text.replace(digraph, f'[{digraph}]')

tokens = []
mode_joint = False
for char in text:
    if char == '[':
        mode_joint = True
        tokens.append('')
    elif char == ']': mode_joint = False
    elif mode_joint: tokens[-1] += char
    else: tokens.append(char)

for token in tokens:
    if token in table: translation += table[token]
    else: translation += token

with open('final.txt', 'w', encoding = 'utf-8') as file:
    file.write(translation)
