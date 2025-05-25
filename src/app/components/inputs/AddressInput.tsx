import React, { useState } from "react";
import { TextField, Button, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";

interface AddressInputProps {
  onChange: (address: Address) => void;
}

interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

const AddressInput: React.FC<AddressInputProps> = ({ onChange }) => {
  const [useManualInput, setUseManualInput] = useState(false);
  const [address, setAddress] = useState<Address>({
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleAutocomplete = async (query: string) => {
    setSearchQuery(query);

    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
          q: query,
          format: "json",
          addressdetails: 1,
          limit: 5,
          countrycodes: "au", // Restrict search to Australia
        },
      });

      setSuggestions(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching autocomplete suggestions:", error);
    }
  };

  const handleSuggestionSelect = (feature: any) => {
    const newAddress = {
      street: feature.address.road || "",
      city: feature.address.city || feature.address.town || feature.address.village ||feature.address.city_district || "",
      state: feature.address.state || "",
      country: feature.address.country || "",
      postalCode: feature.address.postcode || "",
    };

    setAddress(newAddress);
    onChange(newAddress);
    setSuggestions([]);
    setSearchQuery(feature.display_name || "");
  };

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedAddress = { ...address, [name]: value };
    setAddress(updatedAddress);
    onChange(updatedAddress);
  };

  return (
    <div>
      {!useManualInput ? (
        <div>
          <TextField
            label="Search Address"
            value={searchQuery}
            onChange={(e) => handleAutocomplete(e.target.value)}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Start typing your address..."
          />
          {suggestions.length > 0 && (
            <List sx={{ border: "1px solid rgba(0, 0, 0, 0.23)", borderRadius: "4px", marginTop: "8px" }}>
              {suggestions.map((feature) => (
                <ListItem key={feature.place_id} disablePadding>
                  <ListItemButton onClick={() => handleSuggestionSelect(feature)}>
                    <ListItemText primary={feature.display_name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
          <Button
            variant="text"
            onClick={() => setUseManualInput(true)}
            sx={{ marginTop: 1 }}
          >
            Enter Address Manually
          </Button>
        </div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Street"
              name="street"
              value={address.street}
              onChange={handleManualChange}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={address.city}
              onChange={handleManualChange}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="State"
              name="state"
              value={address.state}
              onChange={handleManualChange}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              value={address.country}
              onChange={handleManualChange}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Postal Code"
              name="postalCode"
              value={address.postalCode}
              onChange={handleManualChange}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="text"
              onClick={() => setUseManualInput(false)}
              sx={{ marginTop: 1 }}
            >
              Use Address Search
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default AddressInput;