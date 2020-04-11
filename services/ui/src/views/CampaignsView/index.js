import {useQuery} from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import gql from 'graphql-tag';
import React, {useState} from 'react';
import CampaignList from '../../components/CampaignList';
import Title from '../../components/Title';
import {CustomDialog} from '../../components/Dialog'
import {CampaignAddForm} from '../../components/CampaignAdd'
import {useViewTitle} from '../../contexts/ViewContext';


const GET_CAMPAIGNS = gql`
    query ListCampaigns {
        campaigns @rest(type: "[Campaign]", path: "/campaigns") {
            id
            name
            createdOn
            updatedOn
        }
    }
`;

const CampaignsView = () => {
    useViewTitle('Campaigns');

    const [isOpen, setIsOpen] = useState(false)
    const [campaign, setCampaign] = useState({})
    const {loading, error, data} = useQuery(GET_CAMPAIGNS);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>An error occurred. We could not fetch the Flask API message at <code>/</code></span>;
    }

    const campaigns = data?.campaigns || [];

    const handleDialogOpen = () => {
      setIsOpen(true)
    }
    const handleDialogClose = () => {
      setCampaign({})
      setIsOpen(false)
    }
    const handleDialogSave = () => {
      console.log("Saving")
      console.log(campaign)
      setCampaign({})
      setIsOpen(false)
    }
    const handleCampaignChange = (v) => {
      setCampaign(v)
    }

    return (
        <Grid container>
            <Grid container justify='space-between'>
              <Grid item>
                <Title>Campaigns View</Title>
              </Grid>
              <Grid item>
                <IconButton aria-label="add" onClick={handleDialogOpen}>
                  <AddIcon />
                </IconButton>
                <CustomDialog
                  isOpen={isOpen}
                  handleClose={handleDialogClose}
                  handleSave={handleDialogSave}
                  title="Add Campaign"
                >
                  <CampaignAddForm handleOnChange={handleCampaignChange}/>
                </CustomDialog>
              </Grid>
            </Grid>

            <Grid container>
                <Grid item lg>
                    <Paper>
                        <CampaignList campaigns={campaigns} />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CampaignsView;
