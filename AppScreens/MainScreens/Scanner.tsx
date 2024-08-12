import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import CustomButton from '../../CustomComponents/CustomButton';

const QRScanner = () => {
  const [scanningProgress, setScanningProgress] = useState(0);

  const onSuccess = (e:any) => {
    Alert.alert("QR Code Scanned", e.data);
    setScanningProgress(100);
  };

  const onScanProgress = () => {
    // Simulate scanning progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setScanningProgress(progress);
      if (progress >= 70) {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        reactivate={true}
        reactivateTimeout={5000}
        cameraStyle={styles.camera}
        showMarker={true}
        onMarkerUpdate={onScanProgress}
        markerStyle={styles.marker}
      />
      <Text style={styles.description}>
        Place QR code inside the frame to scan. Please avoid shaking to get results quickly.
      </Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{scanningProgress}%</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${scanningProgress}%` }]} />
        </View>
        <Text style={styles.scanningText}>Scanning...</Text>
      </View>
     <CustomButton title={'Place Order'}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1e23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    height: 300,
    width: 320,
    borderRadius:40,
    marginTop:'2%',
    alignSelf: 'center',
  },
  marker: {
    borderColor: '#00e5ff',
    borderRadius: 10,
  },
  description: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  progressContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    width: 200,
    backgroundColor: '#555',
    borderRadius: 5,
  },
  progress: {
    height: 10,
    backgroundColor: '#00e5ff',
    borderRadius: 5,
  },
  scanningText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#00e5ff',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default QRScanner;
