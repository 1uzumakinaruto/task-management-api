// __tests__/schema.test.js
const { graphql } = require('graphql');
const schema = require('./graphql/Schema');
const User = require('./models/user');

jest.mock('../src/models/user.js');

describe('GraphQL Schema Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches a user by ID', async () => {
    const mockUser = { id: '1', username: 'testuser', role: 'admin', organizationId: 'org1' };
    User.findById.mockResolvedValue(mockUser);

    const query = `
      query {
        user(id: "1") {
          id
          username
          role
          organizationId
        }
      }
    `;

    const result = await graphql(schema, query);
    expect(result.data.user).toEqual(mockUser);
  });

  it('adds a new user', async () => {
    const mockUser = { id: '2', username: 'newuser', role: 'user', organizationId: 'org2' };
    User.prototype.save.mockResolvedValue(mockUser);

    const mutation = `
      mutation {
        addUser(username: "newuser", password: "password123", role: "user", organizationId: "org2") {
          id
          username
          role
          organizationId
        }
      }
    `;

    const result = await graphql(schema, mutation);
    expect(result.data.addUser).toEqual(mockUser);
  });

  // Add more tests for other queries and mutations
});
