import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
}

interface GestureProps extends Record<string, unknown> {
  offset: number;
}

const SwipeableRow: React.FC<Props> = ({children}) => {
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureProps
  >({
    onActive: ({translationX}) => {
      translateX.value = translationX;
    },
  });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View>
      <View
        style={{...StyleSheet.absoluteFillObject, backgroundColor: 'blue'}}
      />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[{height: 32}, animatedStyle]}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
