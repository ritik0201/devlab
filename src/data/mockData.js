export const INITIAL_SKILLS = [
  { id: 'java', name: 'Java & Concurrency', score: 82, status: 'Strong', color: '#10b981' },
  { id: 'react', name: 'React & Frontend', score: 76, status: 'Proficient', color: '#06b6d4' },
  { id: 'sql', name: 'SQL & Database Indexing', score: 71, status: 'Solid', color: '#7c3aed' },
  { id: 'debugging', name: 'Incident Debugging', score: 64, status: 'Improving', color: '#f59e0b' },
  { id: 'sysdesign', name: 'System Design & Partitioning', score: 58, status: 'Needs Focus', color: '#f43f5e' },
  { id: 'aieng', name: 'AI Engineering & Tooling', score: 67, status: 'Active', color: '#7c3aed' }
];

export const PRACTICE_QUEUE = [
  {
    id: 1,
    title: 'Java Collections & Concurrency',
    subtitle: 'Race conditions & ConcurrentHashMap triage',
    status: 'passed',
    time: 'Passed in 18m',
    category: 'Backend'
  },
  {
    id: 2,
    title: 'Debug a REST API Connection Timeout',
    subtitle: 'Live Lab • p99 latency regression 4.8s',
    status: 'in_progress',
    time: 'In Progress',
    category: 'Incident Triage'
  },
  {
    id: 3,
    title: 'SQL Query Execution Plan Optimization',
    subtitle: 'Missing composite index on tenant tables',
    status: 'pending',
    time: 'Pending',
    category: 'Database'
  },
  {
    id: 4,
    title: 'Technical System Design Interview',
    subtitle: 'AI Sim: Distributed rate limiter with Redis',
    status: 'scheduled',
    time: 'Scheduled',
    category: 'Mock Interview'
  }
];

export const DEBUGGING_INCIDENTS = [
  {
    id: 'inc-8402',
    title: 'Production Alert: auth-service',
    severity: 'CRITICAL',
    latency: '210ms → 4.8s',
    logs: [
      '[ERROR] HikariPool-1 - Connection is not available, request timed out after 30000ms.',
      '[WARN] auth-service worker thread pool saturated (50/50 active).',
      '[TRACE] Eager-loading team members in loop PR #419 causing N+1 DB queries.',
      '[DEBUG] Tenant user_sessions table missing composite index (user_id, tenant_id).'
    ],
    initialCode: `// AuthServiceImpl.java - Buggy implementation
public UserSession authenticateAndFetchUser(String userId, String tenantId) {
    // BUG: Missing transaction boundary and unclosed DB connection pool handle
    Connection conn = dbPool.getConnection(); 
    ResultSet rs = conn.createStatement().executeQuery(
        "SELECT * FROM user_sessions WHERE user_id = '" + userId + "'"
    );
    // N+1 Query bug inside loop without index
    List<TeamMember> members = fetchTeamMembers(userId); 
    return new UserSession(userId, tenantId, members);
    // Connection not closed! Causes pool exhaustion under load.
}`,
    solutionCode: `// AuthServiceImpl.java - Patched & Optimized
@Transactional(readOnly = true)
public UserSession authenticateAndFetchUser(String userId, String tenantId) {
    // Fixed: Try-with-resources auto-closes connection & uses parameterized prepared statement with index
    try (Connection conn = dbPool.getConnection();
         PreparedStatement stmt = conn.prepareStatement(
             "SELECT * FROM user_sessions WHERE user_id = ? AND tenant_id = ?"
         )) {
        stmt.setString(1, userId);
        stmt.setString(2, tenantId);
        ResultSet rs = stmt.executeQuery();
        // Fixed: Batch fetch team members to eliminate N+1 latency spike
        List<TeamMember> members = fetchTeamMembersBatched(userId);
        return new UserSession(userId, tenantId, members);
    }
}`
  }
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 1,
    question: "When dealing with high read throughput on a SQL database, which optimization yields the largest reduction in query latency?",
    options: [
      "Adding a composite B-Tree index covering filter & join columns",
      "Increasing the thread pool size on the application server",
      "Converting all VARCHAR columns to TEXT",
      "Restarting the database container periodically"
    ],
    correct: 0,
    skill: "SQL & Database Indexing"
  },
  {
    id: 2,
    question: "In React 18+, what is the main purpose of the useDeferredValue hook?",
    options: [
      "To defer fetching data until the user scrolls to the bottom of the page",
      "To defer updating a non-urgent part of the UI while keeping main user input responsive",
      "To prevent components from re-rendering during state updates",
      "To automatically cache API responses in local storage"
    ],
    correct: 1,
    skill: "React & Frontend"
  },
  {
    id: 3,
    question: "What causes a Connection Pool Exhaustion in a backend service under load?",
    options: [
      "Database disk space reaching 100% capacity",
      "Unclosed DB connections in code path causing threads to wait indefinitely for available connections",
      "Using HTTPS instead of HTTP for database connections",
      "Setting connection timeout to 1ms"
    ],
    correct: 1,
    skill: "Incident Debugging"
  },
  {
    id: 4,
    question: "Which pattern best prevents cascading failures when calling third-party APIs?",
    options: [
      "Retry infinitely until success",
      "Circuit Breaker Pattern with fallback and bulkhead isolation",
      "Global Try-Catch block ignoring all exceptions",
      "Synchronous blocking call on the UI main thread"
    ],
    correct: 1,
    skill: "System Design & Partitioning"
  }
];

export const MOCK_INTERVIEW_DIALOGUE = [
  {
    role: 'interviewer',
    speaker: 'AI Interviewer (Principal Architect)',
    text: 'Welcome to your DevLab System Design interview simulation. You are designing a real-time rate limiter for an API gateway serving 50,000 requests/sec. Which algorithm and data store would you start with?',
    timestamp: '10:00 AM'
  },
  {
    role: 'candidate',
    speaker: 'Candidate (You)',
    text: 'I would use the Token Bucket or Sliding Window Log algorithm implemented with Redis. Redis provides sub-millisecond atomic INCR/EXPIRE operations and low latency memory storage.',
    timestamp: '10:01 AM'
  },
  {
    role: 'interviewer',
    speaker: 'AI Interviewer (Adaptive Follow-up)',
    text: 'Excellent choice. Now, suppose your Redis cluster encounters a net-split split-brain scenario. How do you maintain rate limit invariants without dropping legitimate traffic?',
    timestamp: '10:02 AM'
  }
];
