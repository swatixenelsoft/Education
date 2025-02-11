import Toast from 'react-native-toast-message';

export const showToast = (type, message) => {
    Toast.show({
      type: type, // 'success' or 'error'
      text1: message,
      position: 'bottom',
      visibilityTime: 4000,
    });
  };