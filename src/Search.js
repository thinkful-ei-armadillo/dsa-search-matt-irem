
import React, { Component } from 'react'

let str = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
str = str.split(' ')
let str2 = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
str2 = str2.split(' ')
let sorted = str2.sort()

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      message:'',
      binaryMessage:''
    }
  }

  handleOnChange(num) {
    this.setState({
      input: num
    })
  }

  linearSearch(arr, val) {
    for(let i = 0; i< arr.length; i++) {
      if(Number(arr[i]) === Number(val)){
         this.setState({
           message: `It took ${i+1} to find ${val} in a linear search.`
         })
         return ;
      }
      else{
        this.setState({
          message: 'Not found'
        })
      }
      
    }
  }

  binarySearch(arr, val, start, end, count = 0){
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? arr.length : end;

    if (start > end) {
      this.setState({
        binaryMessage: `Even with a binary search, we couldn't find that item because it's not in the array.`
      })
      return;
    }

    const index = Math.floor((start + end) / 2);
    const item = arr[index];

    console.log(start, end);
    if (item == val) {
      this.setState({
        binaryMessage: `However, it took ${count} to find ${val} in a binary search.`
      })
      return index;
    }
    else if (item < val) {
      count++
      return this.binarySearch(arr, val, index + 1, end, count);
    }
    else if (item > val) {
      count++
      return this.binarySearch(arr, val, start, index - 1, count);
    }
  }


  handleOnClick() {
    this.linearSearch(str, this.state.input)
    this.binarySearch(sorted, this.state.input)
  }
  render() {
    return (
      <div>

        <label htmlFor="input">Search</label>
        <input type="number" name='number' className="input-num" onChange={(e) => this.handleOnChange(e.target.value)} />
        <button type="click" onClick={() => this.handleOnClick()}>Search</button>
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.binaryMessage && <p>{this.state.binaryMessage}</p>}
      </div>
    )
  }
}

