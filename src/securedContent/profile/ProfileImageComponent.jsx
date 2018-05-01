import React, { Component } from 'react'
import { Card, Row, Container, Col, CardHeader, CardBody } from 'reactstrap'

import profileImage from './assets/img/profile.png'

const ProfileImageComponent = props => {
  return (
    <Col xl={4} md={4}>
      <Card className="card-user">
        <div class="image">
          <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" />
        </div>
        <CardBody>
          <div className="content">
            <div className="author">
              <a href="#pablo">
                <img className="avatar border-gray" src={profileImage} alt="..." />
                <h4 className="title">
                  Vlad Krasovsky<br />
                  <small>ukrasouski</small>
                </h4>
              </a>
            </div>
            <p class="description text-center">
              <span>Description Here</span>
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProfileImageComponent
