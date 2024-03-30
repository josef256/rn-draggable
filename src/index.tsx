import * as React from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import type { draggableProps } from './draggable.d';

const Draggable = ({
  children,
  onGrant,
  onMove,
  onRelease,
}: draggableProps) => {
  const translateXY = React.useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderGrant: () => {
        onGrant?.();
      },
      onPanResponderMove: (_evt, gestureState) => {
        translateXY.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
        onMove?.();
      },
      onPanResponderRelease: () => {
        onRelease?.();
        translateXY.extractOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        ...style.container,
        transform: [
          {
            translateX: translateXY.x,
          },
          {
            translateY: translateXY.y,
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
};
Draggable.defaultProps = {
  onGrant: () => {},
  onMove: () => {},
  onRelease: () => {},
};
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 9999,
  },
});
export { Draggable };
