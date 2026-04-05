type Listener = (message: string) => void;

class Signal {
	private listeners: Listener[] = [];

	public Connect(callback: Listener) {
		this.listeners.push(callback);
	}

	public Fire(message: string) {
		for (const listener of this.listeners) {
			listener(message);
		}
	}
}

export default Signal;
