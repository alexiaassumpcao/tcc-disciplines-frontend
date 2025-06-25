import { Card, CardContent } from "@mui/material";
import ResponsiveAppBar from "./NavBar";


export default function DefaultPageLayout({ children }) {
    return (
        <div style={{ height:'100vh', backgroundColor: '#E6F7FF'}}>
            <ResponsiveAppBar />
            <div style={{display: 'flex', justifyContent:'center', margin:'100px 0 0 0', backgroundColor: '#E6F7FF', paddingBottom: '100px'}}>
                <Card  sx={{ minWidth: '50vw', fontFamily:'Lora', padding: '10px 20px 10px 20px' }}>
                    <CardContent sx={{ fontFamily:'Lora' }} >
                        { children }
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}