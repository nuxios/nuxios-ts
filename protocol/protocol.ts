import { db } from "../config/supabase";

class ProtocolSummon {
    private checkusername: any;

    constructor(signatureCheck: string) {
        this.initialize(signatureCheck);
    }

    public async initialize(signatureCheck: string) {
        try {
            const { data, error } = await db.from('users').select().eq('username', signatureCheck);

            if (error) {
                console.error("Error fetching user data:", error);
                // this.checkusername = null;
            } else {
                console.log(data);
                // this.checkusername = data;
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            this.checkusername = null;
        }
    }
}

export default ProtocolSummon;