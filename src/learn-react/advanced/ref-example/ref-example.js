import React from "react";
let ref = React.createRef();
export default function RefExample() {
  ref.current.focus();
  return (
    <BaseInput inputRef={ref}/>
  )
}

// export default class RefExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ref = React.createRef();
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.ref.current.focus();
//     }, 4000)
//   }
//   render() {
//     return <BaseInput inputRef={this.ref}/>
//   }
// }

function BaseInput(props) {
  return (
    <input type="text" ref={props.inputRef} />
  )
}
