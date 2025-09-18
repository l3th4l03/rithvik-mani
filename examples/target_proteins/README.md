# Example Protein Files

This directory contains example protein structure files for testing the Protein Binder Generator.

To use the API test scripts, place your target protein files here:

- `egfr.pdb` - Example EGFR protein structure for testing
- Add your own `.pdb` or `.cif` files here

## Testing the API

1. Configure your environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-api-gateway-url.com
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```

2. Add a test protein file (e.g., `egfr.pdb`) to this directory

3. Run the test scripts:
   ```bash
   npm run test:env          # Check environment configuration
   npm run test:api:quick    # Test the quick design path
   npm run test:api:pipeline # Test the pipeline path (partial)
   ```

Note: The pipeline test only tests the first step (presigned upload URL). 
Full E2E pipeline testing requires manual steps for S3 upload and pipeline creation.