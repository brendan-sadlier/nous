export interface Role {
  id: string;
  key: string;
  name: string;
}

export interface Claim {
  name: string;
  value: Role[];
}

declare function getClaim(claimName: string): Promise<{ name: string; value: any } | null>;