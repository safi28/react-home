import React from "react"
import Slideshow from "./Slideshow"

class Interior extends React.Component {
  render() {
    return (
      <>
        <Slideshow
          images={[
            "https://www.orangeinterior.in/imgs/interior-designers-chennai.png",
            "https://gopillar.com/content/uploads/2017/02/gopillar-masthead-image-02.png",
            "https://gopillar.com/content/uploads/2017/02/gopillar-masthead-image-04.png",
            "https://gopillar.com/content/uploads/2017/02/gopillar-masthead-image-03.png",
          ]}
          name={["Hall", "Bedroom", "Pool", "Office"]}
          price={["5,875,00", "2,333.00", "1,562.78", "3,552.00"]}
          percent={["100", "87", "90", "99"]}
          
        />
      </>
    )
  }
}
export default Interior
