import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import validate from "../../utils/formValidation/ticketValidation";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import API from "../../utils/API";
import { createAssignment } from "typescript";

const CreateTicket = (props) => {
  const team = props.team.map(
    (teammate) => `${teammate.first_name} ${teammate.last_name}`
  );

  const url = window.location.pathname;

  const projectId = url.split("/")[url.split("/").length - 1];

  const initialTicketValues = {
    title: "",
    description: "",
    assignees: [],
    priority: "",
    type: "",
    status: "",
    timeEstimate: "",
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    initialTicketValues
  );

  async function submit() {
    const {
      title,
      description,
      author_id,
      assignees,
      priority,
      type,
      status,
      timeEstimate,
    } = values;

    console.log(assignees);
    console.log(projectId);
    console.log(timeEstimate);

    const { ticketId } = await API.createTicket(projectId, values);
    console.log(ticketId);

    for (let i = 0; i < assignees.length; i++) {
      await API.createDevAssignment(ticketId, assignees[i]);
    }

    values.title = "";
    values.description = "";
    values.assignees = [];
    values.priority = "";
    values.type = "";
    values.status = "";
    values.timeEstimate = "";
  }

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label
                htmlFor="title"
                className="lease-form-label mandatory-entry"
              >
                Title
              </Label>
              <Input
                id="title"
                type="text"
                name="title"
                className="lease-form-input"
                placeholder="Enter ticket title"
                value={values.title}
                onChange={handleChange}
              />
              {errors.title && (
                <div style={{ fontSize: 12, color: "red" }}>{errors.title}</div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="ticketDescription">Ticket Description</Label>
              <Input
                type="textarea"
                name="description"
                id="ticketDescription"
                placeholder="Enter description"
                value={values.description}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="assignees">Assign Devs</Label>
              <Input
                type="select"
                name="assignees"
                id="assignees"
                value={values.assignees}
                onChange={handleChange}
                multiple
              >
                {props.team.map((dev, key) => (
                  <option id={dev.user_id} key={key} value={dev.user_id}>
                    {dev.first_name} {dev.last_name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="timeEstimate">Time Estimate (Hours)</Label>
              <Input
                type="number"
                min="0"
                step="0.5"
                name="timeEstimate"
                id="timeEstimate"
                value={values.timeEstimate}
                onChange={handleChange}
              ></Input>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                type="select"
                name="type"
                id="type"
                value={values.type}
                onChange={handleChange}
              >
                <option>issue</option>
                <option>bug</option>
                <option>high</option>
                <option>error</option>
                <option>feature request</option>
                <option>other</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="type">Priority</Label>
              <Input
                type="select"
                name="priority"
                id="priority"
                value={values.priority}
                onChange={handleChange}
              >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
                <option>immediate</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="type">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={values.status}
                onChange={handleChange}
              >
                <option>new</option>
                <option>open</option>
                <option>in progress</option>
                <option>resolved</option>
                <option>additional info required</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Button color="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateTicket;
