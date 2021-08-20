# Salesforce Experience Cloud - DF21 Demo Build

## Overview

The following SFDX repo includes the web template for using Interaction Studio Solution Kit with an Experience Cloud site. This repo will be used to move the microsite app config between orgs, and it'll also allow us to distribute the build to our SEs for deployment given the Trailforcing issues.

## Deploy Instructions

* Set up your My Domain
* Enable Digital Experiences
* Install the Marketing Cloud Connector
* Install the CMS Content Type Manager
* Install Interaction Studio Components (https://github.com/salesforce-experiencecloud/interaction-studio-content-personalization) via SFDX
* Set up Interaction Studio
    * Add Experience site domain to IS
    * Add *https://cdn.evgnet.com/beacon/interactionstudio/engage/scripts/evergage.min.js*  to Trusted Sites in EC
    * Add IS URLs to CSP Trusted Sites
    * Install beacon on EXC
    * Add Components to page
    * Add EXC domain to the Website Config
    * Launch Visual Editor
    * Build out Sitemap as per the sitemap.js in the repo
    * Create a Web Template based on the template in the repo
    * Create a Web Campaign based on above template
        * Define personalization
* Create A New Content Type For Landing Page Copy
* Set up new Site
* Create primary explore page
* Create secondary lead capture page
* Activate Site
* Update Preferences
    * Allow guest users to access APIs
    * Let guest users view asset files
* Created CMS Content
* Added Static Resource for Bottom Circle
* Enable guest access for Lead records
* Refine design