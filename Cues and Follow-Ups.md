
## 

- JS
	- 01:  Getting Started
		-  [[javascript.info/1-js/01-getting-started/1-intro/article#Cue|Intro]]
## Chapters
### 06:  Interaction:  alert, prompt, confirm
- `alert(message)`
- `const input = prompt(title, [default])`
- `const confirmation = confirm(confirmatioQuestion) // true or false`
### 07:  Type Conversion

#### String Conversion
#### Numeric Conversion

| Value | Becomes... |
| ---- | ---- |
| `undefined` | `NaN` |
| `null` | `0` |
| `true` and `false` | `1` and `0` |
| String | Whitespaces (includes spaces, tabs `\t`, newlines `\n`, etc.) from the start and end are removed. If the remaining string is empty, the result is `0`. Otherwise, the number is "read" from the string. An error produces NaN. |

#### Boolean 
- Values that are intuitively "empty", like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`
- Other values become `true`

| Value | Becomes... |
| ---- | ---- |
| `0`, `""`, `null`, `undefined`, and `NaN` | `false` |
| any other value | `true` |

#### Common errors/mistakes:
- `underfined` is `NaN` as a number, not `0`
- `"0"` and space-only strings like `"  "` are `true` as a boolean
### 08:  Operators
		- 


  ## Resources
  - [[javascript.info/1-js/01-getting-started/2-manuals-specifications/article#Specification|Specifications]]
  - [[javascript.info/1-js/01-getting-started/2-manuals-specifications/article#Manuals|Manuals]]
  - [[javascript.info/1-js/01-getting-started/2-manuals-specifications/article#Compatibility tables|Compatibility Tables]]
  