import React from "react"
import DataContext from "./saveData"
class Context extends React.Component {
  constructor(props) {
    super(props)
    this.state = { product: {} }
  }
  save() {
    if (this.props.history.location.state !== undefined) {
      const data = this.props.history.location.state.state
      this.setState({ product: data })
    }
  }
  componentDidMount() {
    this.save()
  }
  render() {
    const { product } = this.state
    console.log(product);
    return (
      <DataContext.Provider value={product}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
export default Context