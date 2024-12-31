# PRD: Verbatim

## 1. Introduction
Data is the new oil that drives all industries. Everyone knows that data is important, but problem is that each one in the org speaks a different language. Verbatim is a platform that offers a suite of tools to help you speak the same language -- verbatim, acknowledge the diversity of needs and perspectives, and therefore make data-driven decisions. Verbatim revolutionizes the way you work with data.

## 2. Product Overview
In user event definition process, Verbatim offers following features for different roles:
- Project Managers: Web app with design user event tracking data, event tracking status dashboard, and analytics
- Designers: Figma widget to visually define where and when to track events, and discuss with stakeholders
- Software Engineers: Data contract to define the data schema and validate the data
- CxO/Stakeholders: Dashboard by feature to understand the progress of the project

## 3. User Stories

### Figma Widget 
Project Managers:
- As a project manager, I want to be able to see the status of my event tracking in Figma so that I can understand the progress of my project.
- As a project manager, I want to keep track of the event tracking status that I have defined in Web app so that I can understand the progress of my project.

Designers:
- As a designer, I want to be able to see the status of my event tracking in Figma so that I can understand the progress of my project.

Software Engineers:
- As a frontend engineer, I want to get information about which component and user action to track an event easily so that I can implement it in the frontend.
- As a data engineer and a data analyst, I want to get information about the data schema and validate the data so that I can implement it in the backend.

CxO/Stakeholders:
- As a CxO, I want to understand the progress of the project by feature so that I can make data-driven decisions.


## 4. Functional Requirements
Web Application (WIP):
- User can create and manage event tracking definitions
- User can define data schemas for events
- User can view implementation status dashboard
- User can generate data contracts for engineering teams
- User can organize events by features and projects
- User can collaborate with team members through comments and notifications
- User can export analytics reports for stakeholders

Figma widget:
- User can add labels to design files based on user events that need to be tracked
- User can view the status of event tracking implementation (Not Started, In Progress, Completed)
- User can add, edit and delete event tracking definitions
    - Event tracking definition includes:
        - Event name
        - Event description
        - Event properties (e.g. component name, user action, etc.)
            - Property name
            - Property type (e.g. string, number, boolean, etc.)
            - Property description
        - Event tracking status (Not Started, In Progress, Completed)
        - Version (auto-generated, auto-incremented)
- User can add comments and discussions directly on design elements
- User can navigate back and forth between list of events and labels on design files
- User can export event tracking specifications to external tools (e.g. csv file, json file, google sheet and etc.)

## 5. Non-Functional Requirements
Performance:
- Figma widget should load within 3 seconds
- Web application should respond to user interactions within 2 seconds
- System should handle up to 1000 concurrent users

Security:
- All data transmission should be encrypted using HTTPS
- User authentication and authorization required for all features
- Regular security audits and compliance checks

Reliability:
- System uptime of 99.9%
- Automatic backups of all user data
- Graceful error handling and user notifications

Scalability:
- System should support multiple organizations
- Ability to handle increasing number of events and users
- Cloud-based infrastructure for easy scaling

## 6. Conclusion
Verbatim addresses the critical need for alignment in data tracking across different roles in an organization. By providing integrated tools through both Figma and web interfaces, it streamlines the process of defining, implementing, and monitoring user events. The platform ensures that project managers, designers, engineers, and stakeholders can collaborate effectively while maintaining data quality and consistency. This solution will significantly reduce miscommunication, improve implementation accuracy, and enable better data-driven decision making across organizations.
