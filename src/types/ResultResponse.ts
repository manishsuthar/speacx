export type Mission = {
  name: string;
  flight: number;
};

export type ResultResponse = {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: Mission[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
  img:string;
};