import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../common/templates/contentHeader'
import Content from '../common/templates/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContet from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import {create} from './loginActions'

//import List from './chequeList'
import Form from './loginForm'

class Login extends Component {

    componentWillMount() {
        this.props.selectTab('tabCreate')
        this.props.showTabs('tabCreate')
    }

    render(){
        return(
            <div> 
                <ContentHeader title= 'Login' small='Controle'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Login' icon='plus' target='tabCreate' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContet id= 'tabCreate'>
                                <Form onSubmit={this.props.create}
                                    submitLabel= 'Incluir' submitClass ='primary'/>
                            </TabContet>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create
}, dispatch)
export default connect(null, mapDispatchToProps)(Login)