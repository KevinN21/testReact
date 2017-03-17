import * as React from "react";
import * as ReactDOM from "react-dom";
import { Col } from "react-bootstrap";
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
                            <Col md={12} sm={6}>
                                <SearchBox autofocus={true} searchOnChange={true} prefixQueryFields={["actors^1", "type^2", "languages", "title^10"]} placeholder={'coucou'}/>
                            </Col >
                            </TopBar>
                    <LayoutBody>
                        <SideBar>
                            <HierarchicalMenuFilter fields={["type.raw", "genres.raw"]} title="Categories" id="categories"/>
                            <RefinementListFilter id="actors" title="actors" field="actors.raw" operator="aw" size={10}/>
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
                            <Hits mod="sk-hits-grid" hitsPerPage={40} itemComponent={MovieHitsGridItem} />
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
