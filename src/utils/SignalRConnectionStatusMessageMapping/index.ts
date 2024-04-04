import { HubConnectionState } from '@microsoft/signalr';

export const SignalRConnectionStatusMessageMapping = {
  [HubConnectionState.Disconnected]: 'Đã ngắt kết nối',
  [HubConnectionState.Disconnecting]: 'Đang ngắt kết nối',
  [HubConnectionState.Reconnecting]: 'Đang kết nối lại',
  [HubConnectionState.Connecting]: 'Đang kết nối',
  [HubConnectionState.Connected]: 'Đã kết nối',
  unknown: 'Không xác định',
};
