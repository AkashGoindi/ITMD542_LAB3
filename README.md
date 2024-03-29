**Readme File for Lab 3**

# ITMD 542 - LAB 3

## Contact Information:
- **Name:** Akash Goindi
- **Email:** aakash@hawk.iit.edu
- **Class:** ITMD 542
- **Assignment:** Lab 3

## Git Repository URL:
[https://github.com/AkashGoindi/ITMD542_LAB3](https://github.com/AkashGoindi/ITMD542_LAB3)

## Project Description:
This project is a part of the Lab 3 assignment for the ITMD 542 class. It involves the creation of a contact database application using Node.js Express. The application allows users to perform CRUD operations on individual contacts, including creating, reading, updating, and deleting contacts. The data is persisted using the better-sqlite3 library for SQLite database storage, enhancing data management and scalability. The application follows RESTful URL patterns and MVC structure.

<img width="500" alt="Screenshot 2024-02-18 at 11 41 29 PM" src="https://github.com/AkashGoindi/ITMD542_LAB2/assets/41852582/0959f411-5b98-48f6-8354-ac2e3f2f2861">
<img width="500" alt="Screenshot 2024-02-18 at 11 41 35 PM" src="https://github.com/AkashGoindi/ITMD542_LAB2/assets/41852582/590b3ae4-10b4-4472-ae69-df6e5da8232b">
<img width="500" alt="Screenshot 2024-02-18 at 11 41 42 PM" src="https://github.com/AkashGoindi/ITMD542_LAB2/assets/41852582/9eedfdb2-72d4-4679-aee3-8c7a1137e82d">
<img width="500" alt="Screenshot 2024-02-18 at 11 41 51 PM" src="https://github.com/AkashGoindi/ITMD542_LAB2/assets/41852582/cb3fc772-206a-4024-8488-6aa78258f96a">
<img width="500" alt="Screenshot 2024-02-18 at 11 42 01 PM" src="https://github.com/AkashGoindi/ITMD542_LAB2/assets/41852582/56458a71-4b8e-40a5-bb38-0c18010df18e">

## Development Environment:
- **Operating System:** MAC OS
- **Node.js Version:** 18.17.1
- **Template Engine:** ejs
- **Editor:** VS Code

## Installation/Running Instructions:
1. Clone the repository from the Git URL provided above.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Start the application by running `npm run dev`.
5. Access the application in your web browser at `http://localhost:3000`.

## Insights and Results:
During the development of this project, the transition from local file storage to `better-sqlite3` for data persistence presented new challenges and insights:

- **Integration of `better-sqlite3`:** Incorporating `better-sqlite3` into the existing application required adjustments in data handling and database interactions, expanding my knowledge of working with different data storage solutions.

- **Improved Data Management:** Utilizing a SQLite database offered better data management capabilities compared to local file storage, enhancing the efficiency and scalability of the application.

- **Refinement of Error Handling:** With the introduction of a database, error handling and validation were refined to accommodate database-related errors, ensuring smoother user experiences.

- **Testing and Debugging:** Rigorous testing and debugging were crucial during the integration phase to ensure seamless functionality and data integrity.

- **Results:** Despite the challenges, the project was successfully implemented, with the application maintaining its core functionality while leveraging the benefits of SQLite database storage.

## References:
- [https://ejs.co/](https://ejs.co/)
- [https://expressjs.com/](https://expressjs.com/)
- [https://express-validator.github.io/docs](https://express-validator.github.io/docs)
- [https://github.com/JoshuaWise/better-sqlite3](https://github.com/JoshuaWise/better-sqlite3)

**Important Notice:** :warning:

This project currently runs only on macOS due to compatibility issues with the `better-sqlite3` package on Windows. There are potential errors when attempting to run this project on Windows systems. 

If you are using Windows and still wish to run this project, please be aware that you might encounter difficulties with the `better-sqlite3` package. You may need to seek alternative solutions or contribute to resolving the compatibility issues with the package.

For any assistance or updates regarding Windows compatibility, feel free to reach out or monitor the project's repository for updates.
