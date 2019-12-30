import React from 'react'
import ReactQuill from 'react-quill'
// import CustomToolbar from './CustomToolbar'

// import stylesheet
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'react-quill/dist/snow.snow.css'; // ES6
// import 'quill/dist/quill.bubble.css'
import './bubble.css'


// /*
//  * Custom "star" icon for the toolbar using an Octicon
//  * https://octicons.github.io
//  */
// import MoneyIcon from '@material-ui/icons/Money';
// const CustomButton = () => <MoneyIcon />

// /*
//  * Event handler to be attached using Quill toolbar module
//  * http://quilljs.com/docs/modules/toolbar/
//  */
// function insertStar () {
//   const cursorPosition = this.quill.getSelection().index
//   this.quill.insertText(cursorPosition, "★")
//   this.quill.setSelection(cursorPosition + 1)
// }

// /*
//  * Custom toolbar component including insertStar button and dropdowns
//  */
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
//       <option value="1"></option>
//       <option value="2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <select className="ql-color">
//       <option value="red"></option>
//       <option value="green"></option>
//       <option value="blue"></option>
//       <option value="orange"></option>
//       <option value="violet"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-insertStar">
//       <CustomButton />
//     </button>
//   </div>
// )

/*
 * Event handler to be attached using Quill toolbar module
 * http://quilljs.com/docs/modules/toolbar/
 */
function insertStar () {
  const cursorPosition = this.quill.getSelection().index
  this.quill.insertText(cursorPosition, "★")
  this.quill.setSelection(cursorPosition + 1)
}

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: this.props.html, theme: this.props.theme }
    // this.state = { editorHtml: '<h1>Hello</h1>', theme: 'bubble' }
    // this.handleChange = this.handleChange.bind(this)
  }

  render () {
    const options = {
      // theme: 'snow'
      theme: 'bubble'
    }

    function onChange (html) {
      console.log(html)
    }

    const events = {
      'text-change': delta => {
        console.log(delta)
      }
    }

    // if (this.props.id !== '') {
    //   this.modules = {
    //     toolbar: {
    //       container: "#toolbar",
    //       // handlers: {
    //       //   "insertStar": insertStar,
    //       // }
    //     }
    //   }
    // } else {
    
    // }

    return (
      <div className="text-editor">
        {/* <CustomToolbar />
        <br/> */}
        <ReactQuill
          theme={this.state.theme}
          // onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          // placeholder={'Write something...'}
          // modules={Editor.modules}
        />
      </div>
    )
  }
}

/*
 * Quill modules to attach to editor
 * See http://quilljs.com/docs/modules/ for complete options
 */
// Editor.modules = {
//   toolbar: {
//     container: "#toolbar",
//     handlers: {
//       "insertStar": insertStar,
//     }
//   }
// }



Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    [{color: []}, {background:[]}],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'color', 'background'
]

/*
 * PropType validation
 */
Editor.propTypes = {
  // placeholder: React.PropTypes.string,
  // theme: React.PropTypes.string,
  // id: React.PropTypes.string,
  // html: React.PropTypes.string,
}

export default Editor
