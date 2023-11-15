/**
 * Express router paths go here.
 */

export default {
  Base: '/api',
  Artist: {
    Base: '/artist',
    Search: '/search',
  },
  Album: {
    Base: '/artist',
    Get: '/:id'
  }
} as const;
