import React, {Component} from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valuebox'

export default ({entradas, saidas}) => (
        <Grid cols= '12'>
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox cols='12 4' color = 'green' icon= 'plus'
                        value={`${entradas}`} text='Total de entradas'/>
                    <ValueBox cols='12 4' color = 'red' icon= 'minus'
                        value={`${saidas}`} text='Total de saidas'/>
                    <ValueBox cols='12 4' color = 'blue' icon= 'balance-scale'
                        value={`${entradas-saidas}`} text='Saldo'/>
                </Row>
            </fieldset>
        </Grid>
)