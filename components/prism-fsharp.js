Prism.languages.fsharp = Prism.languages.extend('clike', {
	'comment': [
		{
			pattern: /(^|[^\\])\(\*[\w\W]*?\*\)/g,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/g,
			lookbehind: true
		}
	],
	'keyword': /\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|let|let!|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|return|return!|select|static|struct|then|to|true|try|type|upcast|use|use!|val|void|when|while|with|yield|yield!|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/g,
	'string': /@?("""|"|')((\\|\n)?.)*?\1B?/g,
	'preprocessor': /^\s*#.*/gm,
	'number': [
		{
			pattern: /\b-?(0x[\da-fA-F]*.(un|LF)?)\b/g
		},
		{
			pattern: /\b-?(0b[01]*(y|uy)?)\b/g
		},
		{
			pattern: /\b-?(\d*\.(\d*)?([fFmM]|[Ee](\+|-)?\d*)?)\b/g
		},
		{
			pattern: /\b-?(\d+.([uy]|[us]|[ul]|[UL]|I)?)\b/g
		}
	]
});