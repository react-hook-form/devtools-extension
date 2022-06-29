export type UpdatePayload = {
  id: string;
  data: {
    formValues: Record<string, any>;
    formState: Record<string, any>;
  };
};

type InitMessageData = {
  source: string;
  type: 'INIT' | 'WELCOME';
};

type UpdateMessageData = {
  source: string;
  type: 'UPDATE';
  payload: UpdatePayload;
};

export type MessageData = InitMessageData | UpdateMessageData;
