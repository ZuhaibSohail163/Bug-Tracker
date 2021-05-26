import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import parsePhoneNumber from "libphonenumber-js";
import "./Tables.css";

// reactstrap components
import {
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Button,
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  CardFooter,
} from "reactstrap";

import PaginationComponent from "../components/Tables/PaginationComponent";
import Header from "../components/Headers/Header";
import SelectedTicket from "../components/Tickets/SelectedTicket";
// import CreateTicket from "../components/Forms/CreateTicket";
// import UpdateTicket from "../components/Forms/UpdateTicket";
import AddTeamMember from "../components/Forms/AddTeamMember";
import ProjectTicketsTable from "../components/Tables/ProjectTicketsTable";

import API from "../utils/API";

const Project = () => {
  const projectId = useParams().id;

  const [projectData, setProjectData] = useState(null);
  const [projectTeam, setProjectTeam] = useState([]);
  const [projectTickets, setProjectTickets] = useState([]);
  const [isNewMemberOpen, setIsNewMemberOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [assignedDevs, setAssignedDevs] = useState(null);
  const [comments, setComments] = useState(null);

  //pagination
  const [totalTeamMembers, setTotalTeamMembers] = useState(0);
  const [currentTeamMembersPage, setCurrentTeamMembersPage] = useState(1);
  const teamMembersPerPage = 6;

  const toggleNewMember = () => setIsNewMemberOpen(!isNewMemberOpen);

  // update project team
  useEffect(() => {
    let isRendered = true;

    async function fetchTeam() {
      try {
        const projectTeamRes = await API.getProjectUsers(projectId);

        if (isRendered === true) setProjectTeam(projectTeamRes);
      } catch (err) {
        console.log(err);
      }
    }

    fetchTeam();

    return () => {
      isRendered = false;
    };
  }, [projectId, isNewMemberOpen]);

  // update project data
  useEffect(() => {
    let isRendered = true;
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const projectDataRes = await API.getProject(projectId);
        if (isRendered === true) setProjectData(projectDataRes.data);

        const projectTicketsRes = await API.getProjectTickets(
          projectId,
          abortController
        );
        if (isRendered === true) setProjectTickets(projectTicketsRes);
      } catch (err) {
        alert(`Error requesting project data: ${err}`);
      }
    }
    fetchData();
    return () => {
      isRendered = false;
      abortController.abort();
    };
  }, [projectId]);

  // update ticket data
  useEffect(() => {
    let isRendered = true;

    async function fetchTicket() {
      try {
        if (selectedTicketId) {
          const ticket = await API.getTicket(projectId, selectedTicketId);
          if (isRendered === true) setSelectedTicket(ticket);
          const comments = await API.getTicketComments(selectedTicketId);
          if (isRendered === true) setComments(comments);

          //assigned Devs
          const assignedDevs = await API.getDevAssignments(selectedTicketId);
          if (isRendered === true) setAssignedDevs(assignedDevs);
        }
      } catch (err) {
        alert(`Error requesting project data: ${err}`);
      }
    }

    fetchTicket();

    return () => {
      isRendered = false;
    };
  }, [selectedTicketId, projectId]);

  // const deleteTicket = async (ticketId) => {
  //   await API.deleteTicket(projectId, ticketId);

  //   const projectTicketsRes = await API.getProjectTickets(projectId);
  //   setProjectTickets(projectTicketsRes);
  // };

  const removeTeamMember = async (projectId, userId) => {
    await API.removeTeamMember(projectId, userId);

    const projectTeamRes = await API.getProjectUsers(projectId);
    setProjectTeam(projectTeamRes);
  };

  // //pagination for tickets table
  // const ticketsData = useMemo(() => {
  //   let computedTickets = projectTickets;

  //   setTotalTickets(computedTickets.length);

  //   //current page slice
  //   return computedTickets.slice(
  //     (currentTicketPage - 1) * ticketsPerPage,
  //     (currentTicketPage - 1) * ticketsPerPage + ticketsPerPage
  //   );
  // }, [projectTickets, currentTicketPage]);

  //pagination for team table
  const teamMembersData = useMemo(() => {
    let computedTeamMembers = projectTeam;

    setTotalTeamMembers(computedTeamMembers.length);

    //current page slice
    return computedTeamMembers.slice(
      (currentTeamMembersPage - 1) * teamMembersPerPage,
      (currentTeamMembersPage - 1) * teamMembersPerPage + teamMembersPerPage
    );
  }, [projectTeam, currentTeamMembersPage]);

  if (projectData && projectTeam && projectTickets) {
    return (
      <>
        <Header />
        <Container className="mt--9 vh-70" fluid>
          <Row className="mt-0" id={projectData.id}>
            <Col>
              <h1 className="text-white d-none d-lg-inline-block">
                {projectData.name}
              </h1>
            </Col>
            <Col>
              <h2 className="text-white d-none d-lg-inline-block">
                {projectData.description}
              </h2>
            </Col>
          </Row>
          <Row className="">
            <Col xl="4" className="">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <Col>
                      <h3 className="mb-0">Team</h3>
                    </Col>

                    <Col>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          onClick={toggleNewMember}
                          size="sm"
                        >
                          New Member
                        </Button>

                        <Modal
                          isOpen={isNewMemberOpen}
                          onClose={toggleNewMember}
                        >
                          <ModalHeader toggle={toggleNewMember}>
                            Add Member
                          </ModalHeader>
                          <AddTeamMember
                            projectId={projectId}
                            toggle={toggleNewMember}
                          />
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembersData.map((user) => {
                      return (
                        <tr key={user.user_id} className="teamRow">
                          <th>
                            <Media>
                              {user.first_name} {user.last_name}
                            </Media>
                          </th>
                          <td>{user.email}</td>
                          <td>
                            {parsePhoneNumber(
                              user.phone,
                              "US"
                            ).formatNational()}
                          </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu
                                className="dropdown-menu-arrow"
                                right
                              >
                                <DropdownItem
                                  onClick={() =>
                                    removeTeamMember(projectId, user.user_id)
                                  }
                                >
                                  Remove Team Member
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <CardFooter>
                  <PaginationComponent
                    total={totalTeamMembers}
                    itemsPerPage={teamMembersPerPage}
                    currentPage={currentTeamMembersPage}
                    onPageChange={(page) => setCurrentTeamMembersPage(page)}
                  />
                </CardFooter>
              </Card>
            </Col>
            <Col xl="8">
              <ProjectTicketsTable
                projectId={projectId}
                projectTickets={projectTickets}
                setProjectTickets={setProjectTickets}
                projectTeam={projectTeam}
                selectedTicket={selectedTicket}
                setSelectedTicketId={setSelectedTicketId}
              />
              {/* <Card className="shadow">
                <CardHeader>
                  <Row className="align-items-center">
                    <Col>
                      <h3 className="mb-0">Tickets</h3>
                    </Col>
                    <Col>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          onClick={toggleCreateTicket}
                          size="sm"
                        >
                          New Ticket
                        </Button>

                        <Modal
                          isOpen={isNewTicketOpen}
                          toggle={toggleCreateTicket}
                        >
                          <Container className="m-4 align-self-center" fluid>
                            <ModalHeader toggle={toggleCreateTicket}>
                              Create Ticket
                            </ModalHeader>
                            <CreateTicket
                              team={projectTeam}
                              toggle={toggleCreateTicket}
                            />
                          </Container>
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Ticket Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Ticket Author</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {ticketsData.map((ticket) => {
                      return (
                        <tr
                          key={ticket.id}
                          id={ticket.id}
                          className="ticketRow"
                        >
                          <th
                            onClick={() => {
                              setSelectedTicketId(ticket.id);
                            }}
                          >
                            <Media>{ticket.title}</Media>
                          </th>
                          <td
                            style={{
                              whiteSpace: "unset",
                              wordWrap: "break-word",
                            }}
                          >
                            {ticket.description}
                          </td>
                          <td key={ticket.user_id}>
                            {ticket.first_name} {ticket.last_name}
                          </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                role="button"
                                size="sm"
                                color=""
                                onClick={() => {
                                  setSelectedTicketId(ticket.id);
                                }}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu
                                className="dropdown-menu-arrow"
                                right
                              >
                                <DropdownItem onClick={toggleEditTicket}>
                                  Edit Ticket
                                </DropdownItem>

                                <DropdownItem
                                  onClick={() => {
                                    deleteTicket(ticket.id);
                                  }}
                                >
                                  Remove Ticket
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      );
                    })}

                    <Modal isOpen={isEditTicketOpen} toggle={toggleEditTicket}>
                      <Container className="m-4 align-self-center" fluid>
                        <ModalHeader toggle={toggleEditTicket}>
                          Edit Ticket
                        </ModalHeader>
                        <UpdateTicket
                          team={projectTeam}
                          ticketData={selectedTicket}
                          toggle={toggleEditTicket}
                        />
                      </Container>
                    </Modal>
                  </tbody>
                </Table>
                <CardFooter>
                  <PaginationComponent
                    total={totalTickets}
                    itemsPerPage={ticketsPerPage}
                    currentPage={currentTicketPage}
                    onPageChange={(page) => setCurrentTicketPage(page)}
                  />
                </CardFooter>
              </Card> */}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xl="12">
              <SelectedTicket
                selectedTicket={selectedTicket}
                assignedDevs={assignedDevs}
                comments={comments}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return <>Loading... </>;
};

export default Project;
