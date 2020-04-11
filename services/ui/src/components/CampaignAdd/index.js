import React, {useState} from 'react';
import {
  Grid,
  TextField
} from '@material-ui/core'
import PropTypes from 'prop-types'


export const CampaignAddForm = ({
  handleOnChange
}) => {
  const [campaign, setCampaign] = useState({})
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField required fullWidth label="Name" 
          onChange={(e) => {
            let newCampaign = {...campaign, ...{name: e.target.value}}
            setCampaign(newCampaign) 
            handleOnChange(newCampaign)
          }
          }
        />
      </Grid>
    </Grid>
  )
}

CampaignAddForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired
}
