import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css'

import {
    SearchkitManager,
    SearchkitProvider,
    Hits,
    SearchBox,
    Layout,
    TopBar,
    LayoutBody,
    SideBar,
    HierarchicalMenuFilter,
    RefinementListFilter,
    LayoutResults,
    ActionBar,
    ActionBarRow,
    HitsStats,
    SelectedFilters,
    ResetFilters,
    MovieHitsGridItem,
    NoHits
} from "searchkit";

const searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies/")

class App extends React.Component {

    render() {
        return (

            <SearchkitProvider searchkit={searchkit}>
                <Layout>
                    <TopBar>

                        <SearchBox autofocus={true} searchOnChange={true} prefixQueryFields={["actors^1", "type^2", "languages", "title^10"]} placeholder={'coucou'}/>
                    </TopBar>

                    <LayoutBody>
                        <SideBar>
                            <HierarchicalMenuFilter fields={["type.raw", "genres.raw"]} title="Categories" id="categories"/>
                            <RefinementListFilter id="Ahbon" title="Ahbon" field="actors.raw" operator="aw" size={10}/>
                        </SideBar>

                        <LayoutResults>
                            <ActionBar>

                                <ActionBarRow>
                                    <HitsStats/>
                                </ActionBarRow>

                                <ActionBarRow>
                                    <SelectedFilters/>
                                    <ResetFilters/>
                                </ActionBarRow>

                            </ActionBar>
                            <Hits mod="sk-hits-grid" hitsPerPage={10} itemComponent={MovieHitsGridItem} sourceFilter={["title", "poster", "imdbId"]}/>
                            <NoHits/>
                        </LayoutResults>
                    </LayoutBody>
                </Layout>
            </SearchkitProvider>
        )
    }
};

ReactDOM.render(
    <App/>, document.body);
