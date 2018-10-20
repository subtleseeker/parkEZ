#include <Servo.h>


#define Servo_PIN 10
const int trigPin[] = {2,4,6,8};
const int echoPin[] = {3,5,7,9};
// defines variables
long duration;
int distance[4];
int cars[4];
int num;
int location;

Servo servo_Motor;

void setup() {
   servo_Motor.attach(Servo_PIN);
  servo_Motor.write(10);
pinMode(trigPin[0], OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin[0], INPUT); // Sets the echoPin as an Input
pinMode(trigPin[1], OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin[1], INPUT); // Sets the echoPin as an Input
pinMode(trigPin[2], OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin[2], INPUT); // Sets the echoPin as an Input
pinMode(trigPin[3], OUTPUT); // Sets the trigPin as an Output
pinMode(echoPin[3], INPUT); // Sets the echoPin as an Input

Serial.begin(9600); // Starts the serial communication
}


void loop() {
  servo_Motor.attach(Servo_PIN);
   servo_Motor.write(10);
// Clears the trigPin
digitalWrite(trigPin[0], LOW);
delayMicroseconds(2);
// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin[0], HIGH);
delayMicroseconds(10);
digitalWrite(trigPin[0], LOW);
// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin[0], HIGH);
// Calculating the distance
distance[0]= duration*0.034/2;
// Prints the distance on the Serial Monitor
//Serial.print("Distance1: ");
//Serial.println(distance[0]);

digitalWrite(trigPin[1], LOW);
delayMicroseconds(2);
// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin[1], HIGH);
delayMicroseconds(10);
digitalWrite(trigPin[1], LOW);
// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin[1], HIGH);
// Calculating the distance
distance[1]= duration*0.034/2;
// Prints the distance on the Serial Monitor
//Serial.print("Distance2: ");
//Serial.println(distance[1]);

digitalWrite(trigPin[2], LOW);
delayMicroseconds(2);
// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin[2], HIGH);
delayMicroseconds(10);
digitalWrite(trigPin[2], LOW);
// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin[2], HIGH);
// Calculating the distance
distance[2]= duration*0.034/2;
// Prints the distance on the Serial Monitor
//Serial.print("Distance3: ");
//Serial.println(distance[2]);

digitalWrite(trigPin[3], LOW);
delayMicroseconds(2);
// Sets the trigPin on HIGH state for 10 micro seconds
digitalWrite(trigPin[3], HIGH);
delayMicroseconds(10);
digitalWrite(trigPin[3], LOW);
// Reads the echoPin, returns the sound wave travel time in microseconds
duration = pulseIn(echoPin[3], HIGH);
// Calculating the distance
distance[3]= duration*0.034/2;
// Prints the distance on the Serial Monitor
//Serial.print("Distance4: ");
//Serial.println(distance[3]);

delay(2000);

if(distance[0] < 10 )
{
  cars[0] = 1;

}
 if(distance[0] >= 10)
{
  cars[0] = 0;
}

if(distance[1] < 10 )
{
  cars[1] = 1;

}
if(distance[1] >= 10)
{
  cars[1] = 0;
}

if(distance[2] < 10 )
{
  cars[2] = 1;

}
if(distance[2] >= 10)
{
  cars[2] = 0;
}

if(distance[3] < 10 )
{
  cars[3] = 1;

}
if(distance[3] >= 10)
{
  cars[3] = 0;
}

location = 4*cars[3] + 2*cars[2] + 1*cars[1];
num = cars[3] + cars[2] + cars[1];

Serial.println(location);
//Serial.println(num);

if (cars[0]==1 && num!=3)
{
          servo_Motor.attach(Servo_PIN);
          servo_Motor.write(90);
          delay(1000);
          servo_Motor.write(10);
          servo_Motor.detach();
}



}
