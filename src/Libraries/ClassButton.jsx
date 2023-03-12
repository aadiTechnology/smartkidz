import { Button, ButtonGroup, Grid } from '@mui/material'
import React from 'react'

const ClassButton = ({ itemList, clickItem }) => {
    const onClick = (value) => {
        itemList = itemList.map((item) => {
            return { ...item, IsActive: item.Value === value }
        })
        clickItem(itemList)
    }
    return (


        <Grid container>
            {
                itemList.map((item, i) => {
                    return (
                        <Grid item xs={4} key={i}>
                            <Button onClick={() => { onClick(item.Value) }}
                                color={item.IsActive ? "success" : "primary"}
                                variant="contained">
                                {item.Name}
                            </Button>
                        </Grid>
                    )
                })
            }

        </Grid>

    )
}

export default ClassButton