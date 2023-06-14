import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native'


import styles from './nearByJobs.style'

import { COLORS, SIZES } from '../../constants'

import NearbyJobsCards from '../cards/nearby/NearByJobsCards' 

import useFetch  from '../../hook/useFetch'

const NearByJobs = () => {

    //const router = useRouter();

    const { data, isLoading, error } = useFetch('search', { query:'React developer', num_pages: '1'});
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Near by Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          {
            isLoading ? (<ActivityIndicator size="large" color={COLORS.primary} />):
            error ? (<Text>Something went wrong</Text>) :
            (
              data?.map((job) => (
                <NearbyJobsCards
                  job={job} 
                  key={`near-by-job-${job?.job_id}`}
                  handleNavigate={() => router.push(`/jobs-details/${job.job_id}`)} 
                />
              ))
            )
          }
        </View>
      </View>
    )
}

export default NearByJobs
