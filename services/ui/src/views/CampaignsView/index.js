import {useQuery} from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import gql from 'graphql-tag';
import React from 'react';
import CampaignList from '../../components/CampaignList';
import Title from '../../components/Title';
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

    const {loading, error, data} = useQuery(GET_CAMPAIGNS);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>An error occurred. We could not fetch the Flask API message at <code>/</code></span>;
    }

    const campaigns = data?.campaigns || [];

    return (
        <Grid container>
            <Grid container justify='space-between'>
              <Grid item>
                <Title>Campaigns View</Title>
              </Grid>
              <Grid item>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
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
