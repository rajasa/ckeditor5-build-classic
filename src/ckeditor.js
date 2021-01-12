/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import SuperScript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import SubScript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

// Custom Plugins below.
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	SuperScript,
	SubScript,
	Code,
	CodeBlock,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Autosave,
	IndentBlock,
	Highlight,
	PendingActions,
	Alignment,
	SimpleUploadAdapter,
	Font
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading', 'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor', '|',
			'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '|',
			'highlight', 'link', '|',
			'blockQuote', 'alignment', '|',
			'outdent', 'indent', 'bulletedList', 'numberedList', '|',
			'insertTable', 'imageUpload', 'mediaEmbed', '|',
			'undo', 'redo'
		]
	},
	alignment: {
		options: [ 'left', 'center', 'right', 'justify' ]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		],
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3' }
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
