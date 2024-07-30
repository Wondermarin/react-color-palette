export function isTouch<T>(event: any): event is React.TouchEvent<T> | TouchEvent {
  return "touches" in event;
}
