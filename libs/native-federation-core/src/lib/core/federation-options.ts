export interface FederationOptions {
  workspaceRoot: string;
  outputPath: string;
  federationConfig: string;
  tsConfig?: string;
  verbose?: boolean;
  dev?: boolean;
  develop?: boolean;
  watch?: boolean;
  packageJson?: string;
}
