import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Copyright } from '../Copyright';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';

import { FeedbackType } from '../Widget'

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function Options({onFeedbackTypeChanged}:Props){
	return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe o seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value])=> (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={()=>onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }

      </View>
      <Copyright />
    </View>
	);
}
