import React, {useState} from 'react';
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import PropTypes from 'prop-types'


export const CampaignAddForm = ({
  handleOnChange
}) => {
  const [campaign, setCampaign] = useState({"is_active": true})
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
      <Grid item xs={12}>
        <TextField required fullWidth multiline label="Description" 
          onChange={(e) => {
            let newCampaign = {...campaign, ...{description: e.target.value}}
            setCampaign(newCampaign) 
            handleOnChange(newCampaign)
          }
          }
        />
      </Grid>
      <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox checked={campaign.is_active} onChange={(e) => {
            let newCampaign = {...campaign, ...{is_active: e.target.checked}}
            setCampaign(newCampaign) 
            handleOnChange(newCampaign)
        }
        } name="isActive" />}
        label="Is Active"
      />
      </Grid>
    </Grid>
  )
}

CampaignAddForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired
}
