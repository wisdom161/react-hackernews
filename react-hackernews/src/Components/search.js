import React, { Component } from 'react';

// const Search = ({ 
//   value, 
//   onChange,
//   onSearchSubmit,
//   children  
// }) => {
//   let input;
//   return (
//   <form onSubmit={onSearchSubmit}>
//     <input
//       type="text"
//       value={value}
//       onChange={onChange}
//       ref={el => this.input = el}
//     />
//     <button 
//       type="submit">
//       {children}
//     </button>
//   </form>
//   );
// }

class Search extends Component {
  componentDidMount() {
    if(this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value,
      onChange,
      onSearchSubmit,
      children
    } = this.props;

    return(
     <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        ref={el => this.input = el}
      />
      <button
        type="submit">
        {children}
      </button>
     </form>
    )
  }
}
export default Search;