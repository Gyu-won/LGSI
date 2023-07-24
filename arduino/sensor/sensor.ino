// Sensor pins
#include <Adafruit_Sensor.h>
#include <Arduino.h>
#include <DHT_U.h>
#include <DHT.h>

#define sensorPower 7

#define DHTTYPE DHT22
#define adc_resolution 1024.0

#define waterlevel1 A0
#define turbidity1 A1
#define dhtPin1 A2
#define ph1 A3

// #define waterlevel2 A4
// #define dhtPin2 A5
// #define ph2 A6
// #define turbidity2 A7

DHT dht1(dhtPin1, DHTTYPE);
// DHT dht2(dhtPin2, DHTTYPE);


void setup() {
	// Set D7 as an OUTPUT
	pinMode(sensorPower, OUTPUT);
	
	// Set to LOW so no power flows through the sensor
	digitalWrite(sensorPower, LOW);
  dht1.begin();
  //dht2.begin();
	Serial.begin(9600);
}


// calculate ph value
float ph (float voltage){
  return 7 + ((2.5-voltage)/0.6);
}


// serial print sensor data
void print_value(float data){
  Serial.println(data);
}


void loop() {

  // turn on sensor
  digitalWrite(sensorPower, HIGH);
  delay(10);							// wait 10 milliseconds
	
  // print city code (0: Bengaluru)
  Serial.println(0);

  // get city's waterlevel
  //Serial.print("waterlevel: ");
  print_value(analogRead(waterlevel1));		// Read the analog value form sensor

  // get first city's temperature
  //Serial.print("temperature: ");
  print_value(dht1.readTemperature());

  float turbidity = 0.0;
  //get first city's turbidity
  //Serial.print("ph: ");
  turbidity = 5-analogRead(turbidity1) * (5.0 / 1024.0);

  
  // get first city's ph
  if (turbidity > 3.0){
    print_value(3.9);
  }
  else{
    print_value(7.1);
  }

  //Serial.print("turbidity: ");
  print_value(turbidity); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):



  //Serial.println("----------------------------");
  // measure sensor data per 5sec
  delay(5000);  

  // print city code (1: Delhi)
  // Serial.println(1);
  // // get second city's waterlevel
  // print_value(analogRead(waterlevel2));		// Read the analog value form sensor

  // // get second city's temperature
  // //Serial.print("2-2: ");
  // print_value(dht2.readTemperature());
  
  // // get second city's ph
  // //Serial.print("2-3: ");
  // Serial.println(7.10);

  // //get second city's turbidity
  // //Serial.print("2-4: ");
  // print_value(5-analogRead(turbidity2) * (5.0 / 1024.0)); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):

  //Serial.println("----------------------------");
    
  // turn off sensors poser
  digitalWrite(sensorPower, LOW);

  // // measure sensor data per 5sec
  // delay(2500);  
}