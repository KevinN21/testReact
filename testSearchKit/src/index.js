import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  Hits,
  InitialLoader,
  HitItemProps,
  SearchkitComponent
} from "searchkit";

const InitialLoaderComponent = (props) => (
  <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}>
    loading please wait...
  </div>
)

class App extends SearchkitComponent {

  render(){
    <div>
      <Hits hitsPerPage={50} highlightFields={["title"]} sourceFilter={["title"]}/>
      <InitialLoader component={InitialLoaderComponent}/>
    </div>
  }
}

ReactDom.render(<App />, document.body)
