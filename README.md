# LGSI
## Water Management System in India using Raspberry Pi

## Table of Contents
*Note: This is only a navigation guide for the specification, and does not define or mandate terms for any specification-compliant documents.*
- [Project information](#project-information)
  - [Description](#description)
  - [Development period](#development-period)
  - [Team members](#team-members)
- [Getting Started Guide](#getting-started-guide)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Stacks](#stacks)
- [System Architecture](#system-architecture)
- [Entity Relationship Diagram(ERD)](#entity-relationship-diagram)
- [Screen configuration / API address](#screen-configuration-/-api-address)
- [Key features](#key-features)
- [Workflow](#workflow)
- [Expectation](#expectation)

-----------

## Project information

### Description
According to the data from the World Health Organization (WHO) on 'Household drinking water’ data, from 2020 to 2022, the proportion of households with ‘At least basic’ access to drinking water has increased. However, the proportions of households with ‘Surface water’ and ‘Unimproved’ access have consistently decreased. Also A think tank "Science and Environment Center", which proposes policies to the government, points out that on average **200,000 people** die every year from inadequate water supply and contaminated water, and **75%** of India's total population is affected by contaminated water. The accumulation of water quality and flow monitoring data is of paramount importance in order to diagnose pollution status in rivers and effectively manage water quality through efficient control of pollutants. That's why we aim to enhance accessibility to clean water and promote better water management in India.

*Yellow: the year 2020, Blue: the year 2021, Green: the year 2022*

<img src="https://github.com/KimHeonjae/LGSI-peter/assets/134956232/44863af8-0c02-45f9-852f-f5e8116977f4.png" width="900" height="400">

###### Source:
<https://www.who.int/data/collections>

<https://www.newstown.co.kr/news/articleView.html?idxno=329356#google_vignette>

### Development period
* 2023.07.01 ∼ 2023.07.31

### Team members
- **Jung Gyuwon**
  - Kyungpook National University, School of Computer Science and Engineering. Hardware build-up
- **Hong Seonju**
  - Kyungpook National University, School of Computer Science and Engineering. Hardware build-up
- **Lee Gyuwon**
  - Kyungpook National University, School of Computer Science and Engineering. Front-End
- **Lee Jooyeon**
  - Kyungpook National University, School of Computer Science and Engineering. Front-End
- **Lee Taegon**
  - Kyungpook National University, School of Computer Science and Engineering. Back-End / Server construction
- **Kim Heonjae**
  - Kyungpook National University, Department of Statistics. Project Manager

--------

## Getting Started Guide

### Requirements
- Hardware
  - Type of sensors
    - UNO R3 SMD --- Atmega328P Board 
    - Raspberry Pi 4 Model-B with 4 GB RAM (OS: Web_OS)
    - Water level Sensor (P55508)
    - Temperature and Humidity Sensor (DHT22)
    - pH Sensor (PH-4502C)
    - Turbidity Sensor (TDS-3)
  - How to connect sensors to Arduino Board
    - Sensor Power: 5V
    - Sensor Data pin
    - pH Sensor: A2, A6
    - Turbidity Sensor: A3, A7 
    - Water level Sensor: A0, A4 
    - Temperature and Humidity Sensor: A1, A5 
      
For building and running the application you need:
Node.js ....
......
......
필요한 요구사항들과 버전들 적어준다.

### Installation
- Hardware
  - library to download - DHT sensor library by Adafruit (1.4.4 v)
      - Download link: https://github.com/adafruit/DHT-sensor-library
- Back-End
  - 
      - 
  
repository를 clone하고 패키지 설치, 환경변수 설정, 실행하는 과정에 대한 내용들 코드로.

--------

## Stacks
- Front-end : <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
- DB - <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
- Design - <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
- Hardware coding - <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/c++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white">
- Tools - <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
  <img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
  <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visual studio code&logoColor=white">

--------

## System Architecture

<img src="https://github.com/KimHeonjae/LGSI-peter/assets/134956232/74430fcf-0c78-467c-a979-2d7e70948b1b.png" width="700" height="400">

--------

## Entity Relationship Diagram

<img src="https://github.com/KimHeonjae/LGSI-peter/assets/134956232/6de39f27-0c61-411a-9d60-161069dbb12b.png" width="700" height="400">

--------

## Screen configuration / API address
- 프론트엔드- 개발한 화면에 대한 내용 사진으로.
  
  예시
<img src="https://github.com/KimHeonjae/LGSI/assets/134956232/0c76d398-1476-48c5-a5a1-56d35f9b4f3b.png" width="600" height="600">

- Back-End
  - API address: <https://www.notion.so/API-Document-bf95aca04f6c45c292381999a01e6694?pvs=4>

---------

## Key features
* **Provision of Regional Water Quality Data**
  - Collect water quality-related data by connecting sensors to a Raspberry Pi. Provide water quality data corresponding to the user's location. Specifically, We monitor water temperature, pH, turbidity and water level based on the collected data.
* **Automatic Data Updates**
  - It is a structure where data is automatically updated after a specific period of time. We develop a map that allows users to easily view the updated status of water resources.
* **Alarm System**
  - We assess the state of water based on water quality data. When a dangerous situation occurs, we send a notification to the user within 10 milliseconds. This enables users to receive immediate information about the water condition and take necessary measures in response.

---------
  
## Workflow

<img src="https://github.com/KimHeonjae/LGSI-peter/assets/134956232/e12c46eb-74c2-46b5-aa34-87ffc3afce47.png" width="800" height="450">

---------

## Expectation

* Public Utilization
  * The Indian government can utilize this system to monitor the current status of water pollution and scarcity on a regional basis in real-time, and devise solutions.
  * Specifically, it can be used to measure water levels and utilize them for issuing disaster alerts such as flood warnings or drought advisories.
  * In the future, as this system accumulates more extensive and higher-quality data, it will be possible to predict water quality changes in advance and expand the implementation of regional water quality forecasts to proactively respond to deteriorating water quality in water management.

* Commercial Utilization
  * Water quality management and monitoring system for personal aquariums or fish tanks.
  * Water quality measurement and risk notification system for school cafeterias.
  * Shower filter replacement timing(schedule) notification system.

  
