# RentSlip Documentation

## Table of Contents
1. [Introduction](#1-introduction)
2. [Features](#2-features)
3. [Installation](#3-installation)
4. [Usage Guide](#4-usage-guide)
5. [Form Fields Explanation](#5-form-fields-explanation)
6. [Instruction Page](#6-instruction-page)
7. [Instruction Page](#7-about-page)
8. [PDF Generation](#8-pdf-generation)

#

## 1. Introduction
**RentSlip** is a web application designed to simplify rent and utility cost calculations for tenants. It generates detailed rent invoices with monthly rent and utility charges, and offers PDF downloads for easy record-keeping. The app is built with modern, responsive web technologies for a user-friendly experience.

<br />

## 2. Features
- **Dynamic Calculation**: Automated rent and utility cost calculation.
- **Detailed Invoice Summary**: Breakdown of rent, utility costs, and total charges.
- **PDF Invoice Download**: Easily generate and download invoices.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Guided Instruction Page**: Provides form-filling guidance for accurate input.

<br />

## 3. Installation

To set up **RentSlip** locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/RentSlip.git
   cd RentSlip
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the App**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

<br />

## 4. Usage Guide

1. **Open the Form**: Access the RentSlip main page with the rent and utility form.
2. **Fill Out Details**: Enter required fields such as Landlord’s name, Tenant’s name, rent, and utility charges.
3. **View Summary**: Click **Get Summary** to see a detailed breakdown of costs.
4. **Download Invoice**: Use **Download Invoice** to save the invoice as a PDF.

---

## 5. Form Fields Explanation

- **Landlord**: The name of the landlord or authorized person.
- **Tenant’s Name**: The tenant's full name.
- **Rent for the Month**: Specify the month for which the rent applies.
- **Cost per Unit (Rs.)**: Enter the cost per unit of electricity in rupees.
- **Main Meter Reading**: Total kWh from the main meter.
- **Previous and Current Submeter Readings**: kWh readings of the tenant’s submeter for accurate utility calculation.
- **Water Charges (Rs.)**: Any additional water charges.
- **Home Rent (Rs.)**: Fixed monthly rent amount.

---

## 6. Instruction Page

The **Instruction Page** at `/instructions` provides a step-by-step guide on how to correctly fill out the form fields, especially helpful for new users.

---

## 7. About Page

The **Instruction Page** at `/about` provides a step-by-step guide on how to correctly fill out the form fields, especially helpful for new users.

---


## 8. PDF Generation

The app includes PDF generation functionality, using the `generateBillTemplate` function to create dynamic PDFs with these details:

- Landlord and Tenant names
- Rent and utility costs
- Total charges due

---

